package com.danielks.MarketList.entities.mappers;

import com.danielks.MarketList.entities.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
public class ErrorResponseMapper {

    public ErrorResponse toErrorResponse(HttpStatus status, String message) {
        return new ErrorResponse(status, message);
    }
    public ErrorResponse toErrorResponse(HttpStatus status, Exception exception) {
        return new ErrorResponse(status, exception.getMessage());
    }
}
