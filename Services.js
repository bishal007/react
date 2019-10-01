import React , {Component} from 'react';

class Services extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4 text-primary">Welcome to Our Services</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi eum expedita facere illo incidunt ipsam laborum magni, obcaecati odit quam quasi quisquam quo repudiandae rerum voluptatem! Accusantium deleniti dignissimos doloremque eius inventore iure nostrum, obcaecati quisquam recusandae vero?</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem delectus deleniti doloremque eius est eveniet, fugiat, maiores neque nobis odit officiis quisquam tempore. Ab accusamus cupiditate debitis dolor, dolore dolorem dolores dolorum eos esse ipsum libero molestiae, nulla odio omnis possimus quidem similique sunt tempora vel voluptas voluptate voluptatum.</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi eum expedita facere illo incidunt ipsam laborum magni, obcaecati odit quam quasi quisquam quo repudiandae rerum voluptatem! Accusantium deleniti dignissimos doloremque eius inventore iure nostrum, obcaecati quisquam recusandae vero?</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <a className="btn btn-warning btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        );
    }

}
export  default Services;