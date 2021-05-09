require 'i18n_data'
module CallApi
  extend ActiveSupport::Concern
  include HTTParty

  def list_of_languages(name)
  	id = get_item_id(name)
  	url = "https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&origin=*&props=sitelinks&ids=#{id}"

  	response = HTTParty.get(url).parsed_response
    response.extend Hashie::Extensions::DeepFind
    keys = response.deep_find("sitelinks").keys
    results = []
    keys.each do |key|
    	key = key.gsub('wiki', '')
    	count = word_count(key,name)
    	language = I18nData.languages[key.upcase]
    	results << {name: key, count: count, language_name: language}
    end
  	results
  end

  private
  
  def get_item_id(name)
  	url = "https://en.wikipedia.org/w/api.php?action=query&prop=pageprops&format=json&origin=*&titles=#{name}"

    response = HTTParty.get(url).parsed_response
    response.extend Hashie::Extensions::DeepFind
    response.deep_find("wikibase_item")
  end

  def word_count(lang_code,name)
  	url ="https://#{lang_code}.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&srwhat=nearmatch&srlimit=1&srsearch=#{name}"
  	response = HTTParty.get(url).parsed_response
    response.extend Hashie::Extensions::DeepFind
    response.deep_find("wordcount")
  end
end