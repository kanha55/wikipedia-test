import React from "react";
import { Link } from "react-router-dom";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: []
    };
  }


  componentDidMount() {
  	const {
  	  match: {
  	    params: { id }
  	  }
  	} = this.props;
	  const url = "/api/v1/users?name="+ this.props.match.params.famous_people;
	  fetch(url)
	    .then(response => {
	      if (response.ok) {
	        return response.json();
	      }
	      throw new Error("Network response was not ok.");
	    })
	    .then(response => this.setState({ languages: response }))
	    .catch(() => this.props.history.push("/"));
  }
  render() {
    const { languages } = this.state;
    const allLanguages = languages.map((language, index) => (
      <div key={index} className="col-md-8 col-lg-8 text-center">
        <div className="card mb-4">
            <h5 className="card-title">{language.language_name || language.name}  &nbsp;
             <a href={`https://${language.name}.wikipedia.org/wiki/${this.props.match.params.famous_people}`}>{language.name}</a> 
            &nbsp; Word count: {language.count || 0}
            </h5>
        </div>
      </div>
    ));
    const noLanguage = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          Loading...
        </h4>
      </div>
    );

    return (
      <>
        <div className="row">
          {languages.length > 0 ? allLanguages : noLanguage}
        </div>
        <div className="loader center">
          <i className="fa fa-cog fa-spin" />
        </div>
      </>
    );
  }
}
export default Show;