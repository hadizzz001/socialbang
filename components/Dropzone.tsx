import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {FilesUpload, FileUpload, Widget} from "@uploadcare/react-widget";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


interface IImageForm {
    HandleImagesChange :  Dispatch<SetStateAction<string[] | any[]>>
    defaultValue ?: string[] | undefined | null;
  }

const ImageForm = ({defaultValue,HandleImagesChange}:IImageForm) => {
 const [load,setLoad] = useState(true)
//  useEffect(() => {
//   setLoad(true)
//  }, [])
 const [imgs,
  setImages] = useState < string[] > ([])
  return (
        <Box sx={{
            pt: '1.5em'
        }}> 
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n  .uploadcare--button_primary {\n    background-color: #ea6a2b !important; \n}\n"
  }}
/>



{load && <Widget
                                    clearable
                                    multiple
                                    imagesOnly 
                                    onChange={() => { 
                                    HandleImagesChange(imgs)
                                }}
                                    onFileSelect={async(e : any) => {
                                    let filess = e && e.files();
                                    if (!filess) return;
                                    const immg : string[] = [];
                                    for (let i = 0; i < filess.length; i++) {
                                        filess[i].done((file : any) => {
                                            if (file
                                                ?.cdnUrl) {
                                                immg.push(`${file.cdnUrl}`)
                                            }
                                        })
                                    }
                                    setImages(immg) 
                                    
                                }}
                                    publicKey="59e99ae48b72d2a99d54"/>}

        </Box>
    )
}

export default ImageForm
