import React from 'react'
import '../index.css';
// import { Jumbotron } from 'reactstrap';
class Footer extends React.Component {
    render() {
        return (

                <footer className="container-fluid footer-background" style={{ minHeight: 200, backgroundColor: 'grey' }} >
                <div className="container">
                    <div className='row' >
                    <h3>Footer</h3>
                        <div className="col-12 col-sm-2" >
                        </div>
                        <div className="col-6 col-sm-2" >
                            <ul className="list-unstyled" >
                                
                            </ul>
                        </div>
                        <div className="col-6 col-sm-2" >
                            <ul className="list-unstyled" >
                                
                            </ul>
                        </div>
                        <div className="col-6 col-sm-2" >
                            <ul className="list-unstyled" >
                                
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4" >
                            <ul className="list-unstyled" >
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
export default Footer