import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Get Unlimited free Drinks during your stay.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Do Endless Hiking in the Beautiful Mountains.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Get Free Commute to all your sightseeing locations.'
            },
            {
                icon: <FaBeer />,
                title: 'World Class Beer',
                info: 'Get Best Quality Alcohol at the Resort Premises.'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key = {index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
