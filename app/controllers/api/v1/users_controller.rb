class Api::V1::UsersController < ApplicationController
  include CallApi
	def index
		lists = list_of_languages(name)
		render json: lists
	end

	private

	def name
		params[:name]
	end
end