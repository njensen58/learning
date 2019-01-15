import React, { Component } from 'react'
import { TweenLite, TimelineLite } from 'gsap'
import './style.css'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
        this.tl = new TimelineLite({ paused: true })
        this.modal = null
    }
    

    handleModal = () => {
        const { active } = this.state
        if(!active){
            this.tl
                .to(this.modal, 0.3, {autoAlpha: 1})
                .to(this.modal, 0.5, {top: 50, scale: 1}, "-=0.3")
                .play()
        } else {
            this.tl
                .to(this.modal, 0.3, {autoAlpha: 0})
                .to(this.modal, 0.3, {top: 0, scale: 0.75}, "-=0.3")
                .play()
        }
        this.setState(p => ({ active: !p.active }))
    }
      
      render(){
        return (
            <div>
                <div>
                    <button onClick={() => this.tl.pause()}>Pause</button>
                    <button onClick={() => this.tl.play()}>Play</button>
                    <button onClick={() => this.tl.reverse()}>Reverse</button>
                    <button onClick={() => this.tl.restart()}>Restart</button>
                </div>
                <div onClick={this.handleModal}>
                    Activate Modal
                </div>
                <div 
                    ref={div => this.modal = div} 
                    style={{ 
                        visibility: 'hidden',
                        padding: '10px 20px',
                        border: "1px solid black",
                        borderRadius: "4px",
                        margin: '0 25%',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "absolute",
                        transform: "scale(0.5)" 
                    }}>
                    <h1>Modal Header!</h1>
                    <p>Modal body with a message about what it's for.  Thank you for listening</p>
                    <button onClick={this.handleModal}>Close</button>
                </div>
            </div>
            )
      }
}

export default App



                    // <main ref={main => this.main = main}>
                    //     Main Header
                    //     <div ref={div => this.article1 = div}>
                    //         Article 1
                    //     </div>
                    //     <div ref={div => this.article2 = div}>
                    //         Article 2
                    //     </div>    
                    // </main>
                    
                    // <footer ref={footer => this.footer = footer}>
                    //     Footer
                    // </footer>


                {/* <div className="content" ref={div => this.content = div} >
                    <nav 
                        ref={nav => this.nav = nav} 
                        className="nav">
                        NAV
                    </nav>
                    <div 
                        style={{ height: 300, width: '100vw', backgroundColor: "#333"}}
                        ref={body => this.body = body}>

                    </div>
                    {
                        data.map((item, index) => 
                            <div 
                                className="items"
                                ref={div=> this.items[index] = div} 
                                key={item.id}>
                                item.name
                            </div>
                        )
                    } */}






// const data = [
//     {
//         greeting: "hi",
//         id: 0
//     }, 
//     {
//         greeting: "hello",
//         id: 1
//     }, 
//     {
//         greeting: "goodbye",
//         id: 2
//     },
//     {
//         greeting: "au revoir",
//         id: 3
//     },
//     {
//         greeting: "bonjour",
//         id: 4
//     }
// ]

// this.tl.staggerTo(this.cards, 0.5, {y: 100, autoAlpha: .5}, 0.1)

// Listing cars. needs this.cards array in constructor
// {data.map((element, index) => <p
//     key={element.id}
//     ref={li => this.cards[index] = li}
//     >
//     {element.greeting}
//     </p>)}




// EX 2
// this.logoTl= new TimelineLite({paused: true})

// this.content = null
// this.nav = null
// this.main = null
// this.article1 = null
// this.article2 = null
// this.footer = null
// }

// componentDidMount(){
//     this.logoTl
//         .set(this.content, { autoAlpha: 1 })// show content div
//         //   element,  transition time,  effects obj,  delay/name
//             // Which dom element has this transition
//                         // How long this leg takes
//                                         // configure the effects
//                                                     // += will add to time effect
//                                                     // -= will cut into previous animations time
//         .from(this.nav, 0.5, { left: 100, autoAlpha: 0 })
//         .from(this.main, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
//         .from(this.article1, 0.5, { scale: .5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
//         .from(this.article2, 0.5, { scale: .5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
//         .from(this.footer, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
// }