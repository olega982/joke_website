import { useEffect, useRef,useState } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytes,getDownloadURL} from 'firebase/storage';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { v4 } from 'uuid';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const [imageUpload,setImageUpload] = useState(null)

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDescription,
    };

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef,imageUpload).then(()=>{
       getDownloadURL(imageRef).then((url)=>{
        meetupData.image = url
        props.onAddMeetup(meetupData);
      }).catch(err => console.log(err))
    })
    

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Позывной</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Фото</label>
          <input type='file' required id='image'  onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Принадлежность к движению </label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Описание</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Добавить</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
