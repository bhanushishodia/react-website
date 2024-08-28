import React from 'react';
import PropTypes from 'prop-types';  
import downloadEbookImage from '../../assets/images/download-ebook.png';


const DownloadEbookSection = ({ title, description, modalTarget }) => {
  return (
    <section>                               
      <div className="container py-5">
        <div
          className="row py-md-4 py-4 Certification about_api mx-md-0 mx-2"
          style={{ background: 'linear-gradient(to left bottom,#f3fbff, #FFF7FC )', borderRadius: '15px' }}
        >
          <div className="col-md-3 px-1 col-sm-12 text-justify my-auto text-center">
            <div className="box_citc py-1 mx-auto">
              <img src={downloadEbookImage} className="img-fluid w-lg-100 w-75" alt="download-ebook-logo" />
            </div>
          </div>

          <div className="col-md-9 col-sm-12 my-auto px-5 py-md-0 py-2 text-lg-start text-center">
            <h2 className="fs-3">{title}</h2>
            <p className="text-justify pt-10">
              {description}
              <br />
            </p>
            <button className="btn bg-green  text-white mt-2" data-bs-toggle="modal" data-bs-target={modalTarget}>
              Download ebook
            </button>
          </div>  
        </div>
      </div>
    </section>
  );
};

DownloadEbookSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalTarget: PropTypes.string.isRequired,
};

export default DownloadEbookSection;
