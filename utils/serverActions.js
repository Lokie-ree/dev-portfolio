'use server'

export async function handleContactForm(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    return {success: true, message: "Your message was sent successfully!"};
}