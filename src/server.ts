import { serverHttp, io } from './app'


serverHttp.listen(4000, () => {
    console.log("Server is running in port 4000")
})