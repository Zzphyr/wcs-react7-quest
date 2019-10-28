import React, { Component } from 'react';

class FilmForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         poster: '',
         comment: '',
      }
   }

   onChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      })
   }

   submitFilm = (event) => {
      event.preventDefault();
      const url="https://post-a-form.herokuapp.com/api/movies";
      const configSubmit = {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(this.state),
      }
      fetch(url,configSubmit)
         .then(response => response.json())
         .then(response => {
            if (response.error) {
               alert(response.error);
            } else {
               alert("Film submitted! Thank you ;)")
            }
         })

   }

   render() {
      return (
         <form onSubmit={this.submitFilm}>
            <fieldset>
               <legend>Your favourite film</legend>
               <div>
                  <label htmlFor="title">Title: </label>
                  <input id="title" name="title" onChange={this.onChange} value={this.state.title} required />
               </div>
               <div>
                  <label htmlFor="poster">Poster url: </label>
                  <input id="poster" name="poster" onChange={this.onChange} value={this.state.poster} required />
               </div>
               <div>
                  <label htmlFor="comment">Comments: </label>
                  <textarea id="comment" name="comment" onChange={this.onChange} value={this.state.comment} required />
               </div>
               <br />
               <div>
                  <input type="submit" value="Send!" />
               </div>
            </fieldset>
         </form>
      )
   }
}

export default FilmForm;