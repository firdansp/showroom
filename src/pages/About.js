import React from 'react';
import { Container } from 'reactstrap';
import MainLayout from './layout/MainLayout';


function About(props) {
  return (
    <MainLayout {...props}>
      <Container>
        <div style={{height: '650px'}}>
          <h3>About</h3>
          <p>
            JKT48 SHOWROOM adalah website fanmade yang bertujuan untuk memfilter room member JKT48. <br />
            disini kalian bisa mencoba ngidol dengan pengalaman baru dan User Interface yang berbeda, <br />
            selain itu kalian bisa melihat daftar room member jeketi dan jadwal showroom member yang akan live.
          </p>
          <p>
            Website JKT48 Showroom ini di kembangkan oleh 
            <a style={{color: '#24a2b7'}} href="https://twitter.com/inzoid" rel="noreferrer" target="_blank"> <b>Inzoid</b> </a>
            dan masih terus di develop sampe saat ini. <br />
            Jika kalian ingin mendukung perkembangan project ini untuk masalah server dan lainnya <br />
            kalian juga bisa donasi di link berikut <a href="https://saweria.co/Inzoid" rel="noreferrer" target="_blank">https://saweria.co/Inzoid</a>
          </p>
          <p>Source :</p>
          <ul>
            <li>
              <a href="https://www.showroom-live.com/" rel="noreferrer" target="_blank">
                https://www.showroom-live.com
              </a> (Official Showroom)
            </li>
            <li>
              <a style={{wordBreak: 'break-word'}} rel="noreferrer" href="https://qiita.com/takeru7584/items/f4ba4c31551204279ed2" target="_blank">
                https://qiita.com/takeru7584/items/f4ba4c31551204279ed2
              </a> (Showroom API)
            </li>
          </ul>
          <p>Source Code :</p>
          <ul>
            <li>
              <a href="https://github.com/ikhbaldwiyan/showroom" rel="noreferrer" target="_blank">
                https://github.com/ikhbaldwiyan/showroom
              </a> (JKT48 SHOWROOM WEB)
            </li>
            <li>
              <a style={{wordBreak: 'break-word'}} rel="noreferrer" href="https://github.com/ikhbaldwiyan/jkt48-showroom-api" target="_blank">
                https://github.com/ikhbaldwiyan/jkt48-showroom-api
              </a> (JKT48 SHOWROOM API)
            </li>
          </ul>
        </div>
      </Container>
    </MainLayout>
  );
}

export default About;
