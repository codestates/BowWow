import React from 'react'
import {useHistory} from 'react-router-dom'
import {StyledModal} from './StyledModal'

//로그인이 필요합니다는 댓글창 
function Modal({
  openModal,
  closeModal ,
  modalSuccess,
  modalText
}) {
  let history = useHistory();
  // console.log(modalSuccess);
  return (
    <>
    {openModal ? 
    <StyledModal>
      <div className = 'modal' >
        <div className = 'popup-box'>
          <button className = 'close-btn-x' 
          onClick = {closeModal}
          >X</button>
          <h1>{modalText}</h1>
          <hr></hr>
          <button 
          className = 'modal-btn' 
                onClick={() => { modalSuccess === undefined ? closeModal() : modalSuccess===true ? window.location.replace('/') : history.go(-1) }}>
          확인</button>
        </div>
      </div>
    </StyledModal> :
    null
  }
  </>
  )
}

export default Modal
