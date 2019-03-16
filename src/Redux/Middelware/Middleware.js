import action from '../Actions/action';

class TodoMiddleware {
   static getProduct (data)  {
        return (dispatch) => {
            dispatch(action(data))
           fetch('http://localhost:8000/getDbmens')
          .then((res) => res.json())
          .then((product) => {
          console.log("DB Product", product)
    //   this.props.addToDb(product)
    })
    .catch((error) => console.log(error))
        }

    }
}
export default TodoMiddleware;