function App(){
    return(<div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div id="page-wrapper">
              <div className="container-fluid">    
                  <div className="row">
                      <div className="col-lg-12">
                          <h1 className="page-header">
                              Dashboard <small>Statistics Overview</small>
                          </h1>
                          <ol className="breadcrumb">
                              <li className="active">
                                  <i className="fa fa-dashboard"></i> Dashboard
                              </li>
                          </ol>
                      </div>
                  </div>
                  <div className="row">
                    <Comments />
                    <Tasks />
                    <Orders />
                    <Tickets />
                  </div>
                  <AreaChart />
                  <div className="row">
                      <DonutChart />
                      <div className="col-lg-4">
                          {/*   <TasksPanel>   */}
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                              </div>
                              <div className="panel-body">
                                  <div className="list-group">
                                      {/*   <TaskItem>    */}
                                      <a href="#" className="list-group-item">
                                          <span className="badge">just now</span>
                                          <i className="fa fa-fw fa-calendar"></i> Calendar updated
                                      </a>
                                      {/*   </TaskItem>    */}
                                      
                                  </div>
                                  <div className="text-right">
                                      <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          {/*   </TasksPanel>   */}
  
                      </div>
                      <div className="col-lg-4">
  
                          {/*   </TransactionsPanel>   */}
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
                              </div>
                              <div className="panel-body">
                                  <div className="table-responsive">
                                      <table className="table table-bordered table-hover table-striped">
                                          <thead>
                                              <tr>
                                                  <th>Order #</th>
                                                  <th>Order Date</th>
                                                  <th>Order Time</th>
                                                  <th>Amount (USD)</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {/*   <TransactionRow>   */}
                                              <tr>
                                                  <td>3326</td>
                                                  <td>10/21/2013</td>
                                                  <td>3:29 PM</td>
                                                  <td>$321.33</td>
                                              </tr>
                                              {/*   </TransactionRow>   */}
                                          </tbody>
                                      </table>
                                  </div>
                                  <div className="text-right">
                                      <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          {/*   </TransactionsPanel>   */}
  
                      </div>
                  </div>
                  
  
              </div>
              
  
          </div>
          
  
      </div>
      </div>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'))