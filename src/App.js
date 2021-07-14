import React from 'react';
import Todo from './component/Todo';
import ApiData from './component/ApiData';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
//                 <div className="col-sm-6">
//                     <Todo />
//                 </div>
                <div className="col-sm-12">
                    <ApiData />
                </div>
            </div>
        </div>
    );
};

export default App;
