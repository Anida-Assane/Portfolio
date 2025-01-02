import React from 'react';
import about from "../../static/img/about.jpeg"

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>À propos</h1>
      <p>
        Bienvenue sur la page À propos !
      </p>
      <img src={about} style={{maxWidth: 300}}/>
      <ul>
        <li>🚀 DevOps Engineer passionnée par Docker, Kubernetes et Terraform.</li>
        <li>🎯 Objectif : partager mes connaissances et inspirer d'autres professionnels.</li>
      </ul>
      <p>
        Merci de visiter mon site ! 😊
      </p>
    </div>
  );
}
