import Card from './Card';
import data from './content'
import './App.css'

function App(){
    return (
        <div className='App-container'>
        {data.map((data,index) => (
            <Card key={index} title={data.title} content={data.content} />
        ))}
        </div>
    )
}

export default App;