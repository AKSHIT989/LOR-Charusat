import React from 'react';
import './file-input.css';

export default function FileInput({fileName, onChange, name}) {
    return (
        <div className='custom-file'>
        <input
          type='file'
          accept="application/pdf"
          className='custom-file-input'
          id='file'
          name={name}
          onChange={onChange}
        />
        <label className='custom-file-label' htmlFor='file'>
          {fileName}
        </label>
      </div>

    );
}