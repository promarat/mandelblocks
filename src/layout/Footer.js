import React from 'react';

import { AiOutlineTwitter } from 'react-icons/ai';
import { MdLink } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="container-fluid bg-black py-4 py-md-5">
      <div className="row">
        <div className="col-md-4 py-3">
          <h4 className="text-center fw-500 white">MandelBlocks</h4>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center gap-2 py-3">
          <a href="https://discord.gg/p5zfsT2a" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
            <MdLink className="fp-30" />
          </a>
          <a href="https://twitter.com/squarespace" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
            <AiOutlineTwitter className="fp-30" />
          </a>
        </div>
        <div className="col-md-4 py-3">
          <h4 className="text-center">
            <a href="mailto: mandelblocks@gmail.com" className="white decoration-none hover-white">Mandelblocks@gmail.com</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
