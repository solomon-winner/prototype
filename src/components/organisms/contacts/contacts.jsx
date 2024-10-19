import React from 'react';
import { ContactDiv, Container, PhotoSide, FormSide, Title, Form, Label, Input, Textarea, Button, P } from './contacts';

const Contacts = () => {
    return (
        <ContactDiv>
            <Container>
                <PhotoSide role="img" aria-label="Inspirational image of a person writing in a journal near a window"></PhotoSide>
                <FormSide>
                    <Title>We’d love to hear from you!</Title>
                    <P>Welcome to our gospel song community, where your voice matters. Whether you’ve been touched by the music, inspired by the message, or simply wish to share your story, this space is for you. We invite you to share your thoughts, testimonies, and experiences. Your words can uplift others and spread the love and hope found in gospel music. Let’s celebrate together the power of faith through song!</P>
                    <Form id="testimonyForm">
                        <Label htmlFor="name">Your Name:</Label>
                        <Input type="text" id="name" name="name" required />
                        
                        <Label htmlFor="email">Your Email:</Label>
                        <Input type="email" id="email" name="email" required />
                        
                        <Label htmlFor="testimony">Your Testimony:</Label>
                        <Textarea id="testimony" name="testimony" required></Textarea>
                        
                        <Button type="submit">Submit Testimony</Button>
                    </Form>
                </FormSide>
            </Container>
        </ContactDiv>
    );
}

export default Contacts;