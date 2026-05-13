function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>

      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Message:</label><br />
          <textarea placeholder="Write your message"></textarea>
        </div>

        <button style={{ marginTop: "10px" }} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;