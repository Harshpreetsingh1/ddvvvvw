import { Person, Student, Teacher } from './classes';
import './App.css';

function App() {
    const person = new Person('Alex Johnson', 30);
    const student = new Student('Emma Watson', 20, 'Computer Science');
    const teacher = new Teacher('Dr. Michael Brown', 45, 'Mathematics');

    const people = [
        { instance: person, type: person.getType() },
        { instance: student, type: student.getType() },
        { instance: teacher, type: teacher.getType() }
    ];

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">Person Class Hierarchy</h1>

                <div className="cards-container">
                    {people.map((item, index) => (
                        <div key={index} className="card">
                            <h2 className="card-title">
                                {item.instance.name} ({item.type})
                            </h2>
                            <p className="card-age">Age: {item.instance.age}</p>
                            <p className="card-intro">{item.instance.introduce()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
