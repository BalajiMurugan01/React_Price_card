export default function MainPage({children}){
    return(
      <div className="artboard flex h-full w-full items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <div className="flex gap-3 h-vh w-full justify-center items-center">{children}</div></div>
       
    );
}