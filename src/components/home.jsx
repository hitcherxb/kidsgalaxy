import React from 'react';
import './css/home.css'
import { Link } from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import logo from './pics/logo.png'
import banner from './pics/banner.jpeg'
import kid1 from './pics/kidWithBlocks.jpeg'
import kid2 from './pics/moreKids.jpeg'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';




function home(props) {



    //Carousel
    function Slide(props) {
        var items = [
            {
                name: "Welcome to Kids Galaxy!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: <img className='carouselPic' src={kid1} alt="Logo" />
            },
            {
                name: "Sign up now!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: <img className='carouselPic' src={kid2} alt="Logo" />
            }
        ]

        return (
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        )
    }

    function Item(props) {
        return (
            <Paper id='carousel'>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <div id='carouselPic'>{props.item.image}</div>


            </Paper>
        )
    }

    return (
        <div>
            <div>
                <nav>
                    <div>
                        <Link to='/'><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button className='buttonGroup'>Home</Button>
                            <Button className='buttonGroup'>Learning Strategies</Button>
                            <Button className='buttonGroup'>Contact Us</Button>
                        </ButtonGroup>

                    </div>
                </nav>
                <div>
                    <Slide />
                </div>
                <div >
                    <img className='banner' src={banner} alt='banner' />
                </div>
                <footer>
                    <a href={`https://www.facebook.com/kidsgalaxy.co.in`}>
                        <FacebookIcon className='icon' />
                    </a>
                    <a href={`https://www.instagram.com/kidsgalaxy.co.in/?hl=en`}>
                        <InstagramIcon className='icon' />
                    </a>
                    <a href={`/`}>
                        <TwitterIcon className='icon' src='#' />
                    </a>
                    <a href={`/`}>
                        <YouTubeIcon className='icon' src='#' />
                    </a>
                </footer>
            </div>

        </div >
    );
}

export default home;