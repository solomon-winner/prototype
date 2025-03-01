import { 
    ContactWrapper, ContactTitle, ContactContent, ContactInfo, ContactForm, FormInput, FormTextarea, SubmitButton,
    
} from './contacts.js';
import { useContext } from 'react';
import { scrollContext } from '../../../utils/scrollContext.js';
import { useAddTestimony } from '../../../hooks/useTestimonies.js';

const Contacts = () => {
    const { contactsRef } = useContext(scrollContext);
    const { mutate: addTestimonyMutation } = useAddTestimony();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const testimonyData = {
            testifierName: formData.get('name'),
            email: formData.get('email'),
            testimony: formData.get('testimony'),
        };

        try {
            await addTestimonyMutation(testimonyData);
            event.target.reset();
        } catch (error) {
            console.error('Error submitting testimony:', error);
        }
    };

    return (
        <ContactWrapper ref={contactsRef}>
            <ContactContent>
               <ContactInfo> Share Your testimony or thoughts with us! We are eager to hear what God has done in your life through our ministry.</ContactInfo>
                
                <ContactForm onSubmit={handleSubmit}>
                <ContactTitle>Get in Touch</ContactTitle>

                    <FormInput type="text" placeholder="Name"id='name' name='name' required/>
                    <FormInput type="email" placeholder="Email" id = 'email' name='email' required/>
                    <FormTextarea placeholder="Message" rows="4"id= 'testimony' name = 'testimony'required/>
                    <SubmitButton>Send Message</SubmitButton>
                </ContactForm>
            </ContactContent>
        </ContactWrapper>
    );
};

export default Contacts;
