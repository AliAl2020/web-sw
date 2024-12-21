import React from 'react';
import PropTypes from 'prop-types';
import './PersonalInformationTemplate.css'; // CSS-Datei für Styling
import Block from '../block/Block'; // Import the Block component

const PersonalInformationTemplate = ({ taxId, vorname, nachname }) => {
  return (
    <div className="personal-information-container row justify-content-md-center">
      <Block>
        {{
          title: "Persönliche Informationen",
          content: (
            <div className="personal-information-content">
              <div className="personal-information-item">
                <strong>Steuer-ID:</strong>
                <span>{taxId || 'Nicht verfügbar'}</span>
              </div>
              <div className="personal-information-item">
                <strong>Vorname:</strong>
                <span>{vorname || 'Nicht verfügbar'}</span>
              </div>
              <div className="personal-information-item">
                <strong>Nachname:</strong>
                <span>{nachname || 'Nicht verfügbar'}</span>
              </div>
            </div>
          ),
        }}
      </Block>
    </div>
  );
};

// PropTypes für Validierung
PersonalInformationTemplate.propTypes = {
  taxId: PropTypes.string,
  vorname: PropTypes.string,
  nachname: PropTypes.string,
};

// Standardwerte
PersonalInformationTemplate.defaultProps = {
  taxId: 'Nicht verfügbar',
  vorname: 'Nicht verfügbar',
  nachname: 'Nicht verfügbar',
};

export default PersonalInformationTemplate;
