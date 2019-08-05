import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

// Set default values for hero prop
Hero.defaultProps ={
    hero: "defaultHero"
};