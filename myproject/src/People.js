const faker = require("/home/sonam/Desktop/reactapps/myproject/node_modules/Faker");

const People = (props) =>{
    return(
        <div>
            <div>
                <img src={faker.Image.people(100,100)}/>
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default People;