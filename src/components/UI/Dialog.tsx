type Props = {
  title: string;
  content: string;
  cancelTxt: string;
  acceptTxt: string;
  accentColor: string;
  cancelAction: () => void;
  acceptAction: () => void;
};
export const Dialog = ({ title, content, cancelTxt, acceptTxt, accentColor, cancelAction, acceptAction }: Props) => {
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-30 flex justify-center items-center w-full h-full">
      <dialog open className="bg-white rounded-lg p-6 w-96">
        <div className="text-2xl mb-3 text-gray-700">{`${title}`}</div>
        <div className="text-gray-400 mb-4">{`${content}`}</div>
        <div>
          <button
            onClick={() => cancelAction()}
            className="rounded py-2 px-4 bg-gray-500 text-white mr-3"
          >{`${cancelTxt}`}</button>
          <button
            onClick={() => acceptAction()}
            style={{ background: accentColor }}
            className="rounded py-2 px-4 text-white"
          >{`${acceptTxt}`}</button>
        </div>
      </dialog>
    </div>
  );
};
