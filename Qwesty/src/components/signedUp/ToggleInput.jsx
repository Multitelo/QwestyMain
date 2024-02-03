

  import React, { useState } from 'react';

  const ToggleInput = ({onChange={onChange}, checked}) => {
    
  
    const styles = {
      label: {
        position: 'relative',
        display: 'inline-block',
        width: '60px',
        height: '30px',
      },
      input: {
        opacity: '0',
        width: '0',
        height: '0',
      },
      span: {
        position: 'absolute',
        cursor: 'pointer',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: checked ? 'rgba(127, 86, 217, 1)' : '#a4b3c2',
        transition: '0.3s',
        borderRadius: '30px',
      },
      strong: {
        position: 'absolute',
        left: '100%',
        width: 'max-content',
        height: '100%',
        lineHeight: '30px',
        marginLeft: '10px',
        cursor: 'pointer',
      },
      spanBefore: {
        position: 'absolute',
        content: '""',
        height: '25px',
        width: '25px',
        left: '3px',
        bottom: '2.6px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        transition: '0.3s',
        transform: checked ? 'translateX(29px)' : 'translateX(0)',
      },
    };
  
   
  
    return (
      <label style={styles.label}>
        <input type="checkbox" 
               style={styles.input}
               onChange={onChange} 
               checked={checked} />
        <span style={styles.span}>
         
          <span style={styles.spanBefore}></span>
        </span>
      </label>
    );
  };
  
  export default ToggleInput;
  
