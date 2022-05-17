// import left from "../../assets/left.png";
// import right from "../../assets/right.png";
export const ArrowButtonSmall = ({ slider }) => {
  return (
    <div className="d-flex justify-content-end px-4 pb-3">
      <div className="d-flex arrow ">
        <div
          className="hover-icon"
          onClick={() => slider?.current?.slickPrev()}
        >
          next
        </div>
        <div onClick={() => slider?.current?.slickNext()}>
          prev
        </div>
      </div>
    </div>
  );
};
