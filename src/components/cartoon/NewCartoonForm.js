import { useRef } from "react";

function NewCartoonForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const yearInputRef = useRef();
  const countryInputRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    const cartoon = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      year: yearInputRef.current.value,
      country: countryInputRef.current.value,
    };
    props.addCartoonHandler(cartoon);
  }

  return (
    <div>
      <form style={{ width: "530px" }} onSubmit={onSubmitHandler} autoComplete='off'>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            ref={titleInputRef}
            autoComplete="false"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image url:</label>
          <input
            type="url"
            className="form-control"
            id="image"
            required
            ref={imageInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            className="form-control"
            id="year"
            min="1900"
            max="2022"
            required
            ref={yearInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            required
            ref={countryInputRef}
          />
        </div>
        <br />
        <button className="btn btn-outline-primary">Add cartoon</button>
      </form>
    </div>
  );
}

export default NewCartoonForm;
