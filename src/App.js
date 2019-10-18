import React, { Component }
from 'react';


class App extends Component {
    render() {
        return (
                <div>
                    <div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="container">  </div>                                      
                                    <div className="container" id="button">
                                        <h1>Renew Your Vehicle Registration</h1>
                                        <h3>Enter Your Vehicle Information</h3>
                                        <form>
                                            <div className="form-group">
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="License Plate"/>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control text-muted" id="exampleFormControlSelect1">
                                                    <option>Vehicle Make</option>
                                                    <option>Ford</option>
                                                    <option>Honda</option>
                                                    <option>Toyota</option>
                
                                                </select>
                                            </div>                
                                        </form>
                                        <button type="button" class="btn btn-primary btn-lg btn-block">Next</button>
                                    </div>
                                </div>
                
                
                
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="vl">
                                        <div className="container" id="test">
                                            <h4 className="text-center" id="logName">eTags.com</h4>
                                            <h2 className="text-center">Driven by Technology</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}
;

export default App;