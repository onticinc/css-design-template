import React from 'react';


const IndexContainer = () => {
    return (
        <div>
            <body className="">
                <div className="container">
                    <h1>Design System</h1>
                    
                    <div className="bg-white text-dark" style={{padding: "1rem"}}>
                        light blue bg, with dark text
                    </div>
                    <div className="bg-accent text-accent" style={{padding: "1rem"}}>
                        white bg, with dark text
                    </div>
                    <div className="bg-white text-white" style={{padding: "1rem"}}>
                        light blue bg with 20% akoga and white text
                    </div>

                    <section id="colors">
                        <h2><span>01</span> Colors</h2>
                        <div style={{padding: "3rem 1rem 1rem", border: '1px solid white'}}>

                        </div>
                    </section>
                    <p className='text-white'>
                        Elit voluptate consectetur in consectetur fugiat id tempor fugiat est. Officia exercitation sit cillum voluptate mollit Lorem eiusmod. Tempor esse nulla quis pariatur duis anim labore sunt dolor. Deserunt pariatur irure labore aliqua cupidatat cupidatat adipisicing voluptate anim cillum. Nisi ut fugiat laboris quis dolore deserunt.
                    </p>
                    <p className="text-white">
                        Aliquip ex occaecat minim dolore minim eu. Esse officia qui aute labore ut mollit pariatur. Nulla et sit cupidatat occaecat do et quis excepteur aliquip cupidatat. Officia ipsum ipsum Lorem laborum velit consectetur sit. Et adipisicing consectetur consequat non eiusmod cillum aliquip elit aliquip ut id pariatur. Culpa et veniam dolore consequat esse et consectetur fugiat cupidatat consectetur proident id ad.
                    </p>


                </div> 
            </body>
        </div>
    )
} 

export default IndexContainer;

