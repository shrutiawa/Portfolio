import React, { useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, CertificateCard, CertificateGrid, CertificateImage, CertificatesGrid, CertificateTitle, Overlay, OverlayImage } from './AcomplishmentsStyles';
import certData from '../../JSON data/certificatesData.json';

const Certificates = () => {
  const [zoomed, setZoomed] = useState(null);
   const [visible, setVisible] = useState(false);

    const handleOpen = (img) => {
    setZoomed(img);
    setTimeout(() => setVisible(true), 10); 
  };
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setZoomed(null), 300);
  };
  return (
    <Section id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <CertificatesGrid>
        {certData.certificates.map((cert, index) => (
           <CertificateCard key={index} onClick={() => handleOpen(cert.image)}>
            <CertificateImage src={cert.image} alt={cert.title} />
            <CertificateTitle>{cert.title}</CertificateTitle>
          </CertificateCard>
        ))}
      </CertificatesGrid>

      {zoomed && (
         <Overlay onClick={handleClose} visible={visible}>
          <OverlayImage src={zoomed} alt="Zoomed Certificate" visible={visible}/>
        </Overlay>
      )}
      <SectionDivider />
    </Section>
  );
};

export default Certificates;
