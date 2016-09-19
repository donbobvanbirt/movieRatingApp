
let App = React.createClass({

  getInitialState() {
    return {
      Movies: []
    }
  },

  onInputChange(e) {
    this.setState({newTweet: e.target.value});
  },

  submitForm(e) {
    e.preventDefault();

    let { title, image } = this.refs;

    let movie = {
      title: title.value,
      image : image.value,
      score: 0,
      id: uuid()
    }

    let Movies = this.state.Movies;

    this.setState({
      Movies: [...Movies, movie]
    }, () => console.log('state:', this.state));

    console.log('movie:', movie);
    // console.log('state:', this.state);
  },

  voteUp(id) {
    const { movies } = this.state;
    
    console.log('up', id);


  },

  voteDown(id) {
    console.log('down', id);
  },

  render() {
    // let { newTweet, tweets } = this.state;
    let { Movies } = this.state;

    let movieList = Movies.map((item, index) => {
      return (
        <tr key={item.id}>
          <td><img src={item.image} alt={item.title} className="pic"/></td>
          <td>{item.title}</td>
          <td>{item.score}</td>
          <td><button onClick={() => {this.voteUp(item.id)}} className="btn btn-sm btn-default"><i className="fa fa-angle-double-up"></i></button></td>
          <td><button onClick={() => {this.voteDown(item.id)}} className="btn btn-sm btn-default"><i className="fa fa-angle-double-down"></i></button></td>
        </tr>
      )
    })

    return (
      <div className="container">
        <h1>Movie Rating App</h1>

        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="newMovie">Title</label>
            <input ref="title" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input ref="image" type="text" className="form-control" />
          </div>
          <button className="btn btn-default">Add Movie</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Rating</th>
              <th>Vote Up</th>
              <th>Vote Down</th>
            </tr>
          </thead>
          <tbody>
            {movieList}
          </tbody>
        </table>



      </div>
    )
  }
})


ReactDOM.render(
  <App/>, // reactElement
    document.getElementById('root') // domContainerNode
  )
