import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6 my-5 justify-items-center alig'>
            <div className="card w-96 bg-emerald-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-black font-serif font-bold"><u>Difference Between SQL and NoSQL</u></h2>
    <p className='text-black font-semibold'>1.SQL stands for Structured Query Language. SQL is a standard language for storing, manipulating, and retrieving data in relational database systems. <br />On the other hand, NoSQL or “non-SQL” is a non-relational database that does not require a fixed schema and is easy to scale. <br /><br />2.SQL databases are vertically scalable where NoSQL databases are horizontally scalable. <br /><br />3.SQL databases use the ACID consistency model.  Where NoSQL databases use the BASE consistency model. <br /><br />4.SQL uses a relational data model. SQL relational model uses many-to-many relationship. Where, NoSQL uses a nonrelational data model that does not use relationships.</p>
  </div>
</div>
            <div className="card w-96 bg-emerald-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-black font-serif font-bold"><u>What is JWT? How does it work?</u></h2>
    <p className='text-black font-semibold'>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML. <br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.



</p>
  </div>
</div>
            <div className="card w-96 bg-emerald-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-black font-serif font-bold"><u>Difference between Javascript and NodeJs</u></h2>
    <p className='text-black font-semibold'>
    JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment.
</p>
  </div>
</div>
            <div className="card w-96 bg-emerald-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-black font-serif font-bold"><u>How Does NodeJs handle multiple requests at the same time?</u></h2>
    <p className='text-black font-semibold'>
    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
</p>
  </div>
</div>
        </div>
    );
};

export default Blogs;