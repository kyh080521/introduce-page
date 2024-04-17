import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Modal from 'react-modal';
import styles from './styles/App.module.css';
import Subject from './styles/StyledCompo';

const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "500px",
    height: "500px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};

function App() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [QRAdress, setQRAdress] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [snsName, setSnsName] = useState('')

  const toggleQRCode = (address, snsNames) => {
    setQRAdress(address);
    setSnsName(snsNames);
    setShowQRCode(!showQRCode);
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  };

  useEffect(() => {
    setModalOpen(modalOpen);
  }, [modalOpen]);


  return (
    <div className={styles.AppContainer}>
      {showQRCode && (
        <div>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(!modalOpen)}
            style={customModalStyles}
            ariaHideApp={false}
            contentLabel="Pop up Message"
            shouldCloseOnOverlayClick={true}
          >
            <QRCode style={{ position: 'fixed', top: '50%', left: '50%', width: '500px', height: '500px', transform: 'translate(-50%, -50%)', zIndex: '9999' }} value={QRAdress} />
            <p>{snsName}</p>
          </Modal>
        </div>
      )}

      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <a className={styles.navItem} href="#Home">
            Home
          </a>
          <a className={styles.navItem} href="#projects">
            Projects
          </a>
          <a className={styles.navItem} href="#contact">
            Contact
          </a>
        </ul>
      </nav>

      <div className={styles.container} id="Home">
        <div className={styles.whoAmI}>
          <p className={styles.name}>김윤혁</p>
          <div className={styles.textDescript}>
            <h1 className={styles.nickName}>kyh080521</h1>
            <p className={styles.profile}>KDHS 23기 해킹방어과 1-5</p>
          </div>
        </div>
      </div>

      <div className={styles.container} id="projects">
        <Subject>
          Project
        </Subject>
        <div style = {{display: 'flex', flexDirection : 'row'}}>
          <div className={styles.projects}>
            <div className={styles.description}>
              <div className={styles.project}>
                <img src="https://i.ibb.co/M56QL2y/QR-icon.png" className={styles.QRIcon} alt="QR-icon" />
                <a href="https://github.com/kyh080521/ALcode_USER_END" className={styles.projectName}>알코드</a>
                <p className={styles.projectYear}>2022~2023</p>
                <p className={styles.projectDescription}>공공API를 활용한 식품 알러지 자동 검사 어플리케이션입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" style={{ marginTop: '60px' }}>
        <Subject>
          Contact
        </Subject>
        <div className={styles.SNSContainer}>
          <div className={styles.SNS}>
            <button className={styles.SNSButton} id = "square" onClick={() => toggleQRCode('https://www.instagram.com/k_yoonhyk', 'Instagram')}>
              <img src="https://i.ibb.co/0Q8H6kT/instagram-PNG9.png" className={styles.SNSImage} alt="instagram-PNG9" />
            </button>
          </div>

          <div className={styles.SNS}>
            <button className={styles.SNSButton} id = "square" onClick={() => toggleQRCode('https://github.com/kyh080521?tab=repositories', 'Github')}>
              <img src="https://i.ibb.co/F8DdrX3/Git-Hub-Invertocat-Logo-svg.png" className={styles.SNSImage} alt="Git-Hub-Invertocat-Logo-svg" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
