import React from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "../styles/components/KitchenComponent.css";

const KitchenComponent = ({ kitchen }) => {
  React.useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `.gallery-${kitchen.name.replace(/\s+/g, "-")}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
      imageClickAction: "next",
      tapAction: "next",
      doubleTapAction: "zoom",
      preloaderDelay: 0,
      mainClass: "pswp-with-preloader",
      initialZoomLevel: "fit",
      secondaryZoomLevel: 2,
      maxZoomLevel: 4,
    });

    lightbox.init();
  }, [kitchen.name]);

  return (
    <div className="kitchen">
      <div className="kitchen-box">
        <div className="title-kitchen">
          <h2>{kitchen.name}</h2>
          <p title={kitchen.material}>
            Materijal: <span>{kitchen.material}</span>
          </p>
          <p title={kitchen.hardware}>
            Okovi: <span>{kitchen.hardware}</span>
          </p>
        </div>

        <div className={`gallery gallery-${kitchen.name.replace(/\s+/g, "-")}`}>
          <div className="large-image">
            <a
              href={kitchen.images[0].src}
              data-pswp-width={kitchen.images[0].width}
              data-pswp-height={kitchen.images[0].height}
            >
              <img src={kitchen.images[0].thumb} alt={kitchen.name} />
            </a>
          </div>
          <div className="small-images">
            {kitchen.images.slice(1).map((image, idx) => (
              <a
                key={idx}
                href={image.src}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
              >
                <img
                  src={image.thumb}
                  alt={`In-3M interijeri slika kuhinje ${idx + 1}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default KitchenComponent;
