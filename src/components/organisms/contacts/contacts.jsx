import React from 'react';
import { ContactDiv, Container, PhotoSide, FormSide, Title, Form, Label, Input, Textarea, Button } from './contacts';

const Contacts = () => {
    return (
        <ContactDiv>
            <Container>
                <PhotoSide role="img" aria-label="Inspirational image of a person writing in a journal near a window"></PhotoSide>
                <FormSide>
                    <Title>Share Your Testimony</Title>
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