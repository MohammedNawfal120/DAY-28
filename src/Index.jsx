import React from 'react'
import Button from './Button.jsx'
import Layout from './Layout.jsx'
import UserCard from './UserCard.jsx'

function Index() {
    function showMessage() {
        alert("Button clicked");
    }

    return (
        <Layout>
            <UserCard name="Nawfal" age={20} />
            <Button label="Click Me" onClick={showMessage} />
        </Layout>
    );
}

export default Index;