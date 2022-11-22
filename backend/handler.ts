"use strict";

module.exports.welcome = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Your function executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };

}