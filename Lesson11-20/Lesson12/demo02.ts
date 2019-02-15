enum ResponseState {
    No = 0,
    Yes = 1,
}

function respond(recipient:string,message:ResponseState):void{
    console.log(recipient,"ResponseState:",message)
}

respond("Princess Caroline",ResponseState.Yes)

enum Direction01 {
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right",
}

enum FileAccess {
    None,
    Read = 1<<1,
    Write = 1<<2,
    ReadWrite = Read | Write,
    G = "123".length
}
