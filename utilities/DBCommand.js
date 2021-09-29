const { getConnection } = require('./DBConnection')

module.exports = {
    dbCommand: async (command) => {
        let conn;
        let res;
        try {
            conn = getConnection()
            await conn.then(function (result) {
                conn = result

                result.query(command, [])
                    .then(rows => {
                        console.log(rows)
                        res = rows
                    })
            })

        } catch (err) {
            console.log("asdf")
            console.error(err)
        } finally {
            if (conn) {
                conn.release()
            }
        }
        if (res) return res;
    }
}