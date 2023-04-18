import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { json } from 'stream/consumers';
import { stat } from 'fs';
import { title } from 'process';


  interface Book {
    
    id: number;
    title: string;
    author: string;
    publish_year: number;
    page_count: number;

}

  interface State{
    books: Book[];

    id: number,
    title: string,
    author: string,
    publish_year: number,
    page_count: number,
  }

class App extends React.Component<{}, State>{

  constructor(props: {}){
    super(props);

    this.state = {
      books: [],
      id: ,
      title: '',
      author: '',
      publish_year: '',
      page_count: '',
    }
  }

  async betoltes(){
   const response = await fetch('http://localhost:3000/api/books')
   const adatok = await response.json() as Book[];
   this.setState({
    books: adatok
   })
  }

  componentDidMount(): void {
    this.betoltes();
  }
  render(): React.ReactNode {
    const{books} = this.state;  
    return <div className='container-fluid'>
      <div className='row'>
          {
          books.map(b => <div className='col-12 col-sm-6 col-md-4'>
            <h2>{b.title}</h2>
            <p>{b.author}</p>
            <p>Kiadási év: {b.publish_year}</p>
            <p>Oldalszám: {b.page_count}</p>
            <p><img src={'kepek/' + b.author + 'jpg'} alt={b.author} /></p>
            </div>)
          }
      </div>
      <form action="">
        <label htmlFor="">Cím: <br />
        <input type="text" value={title} onChange={e => this.setState({title: e:currentTarget.value})}/>
        </label><br />
        
      </form>
    </div>
  }
}

export default App;
