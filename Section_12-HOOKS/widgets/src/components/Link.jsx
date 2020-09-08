import React from 'react';

const Link = ({ className, href, children }) => {
    // helper function
    const onClick = (event) => {
        // this is just UX if user wants seperate window, and to prevent al the code below
        if(event.metaKey || event.ctrlKey) {
            return;     
        }

        // prevents normal behaviour of full page relaod
        event.preventDefault();
        // This is preventing full page reload but it does update the href url
        window.history.pushState({}, '', href);

        // this communicates to rotue components that state has changegd
        const navEvent = new PopStateEvent('popstate');
        // listens to event above
        window.dispatchEvent(navEvent);
    };

    return (
        // This is the Link behind the scenes and passing chidren to it
        <a onClick={onClick} href={href} className={className}>{children}</a>
    )
};

export default Link;