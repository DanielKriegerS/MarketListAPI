package com.danielks.MarketList.exceptions.handlers;

import com.danielks.MarketList.controllers.MarketListController;
import com.danielks.MarketList.entities.ErrorResponse;
import com.danielks.MarketList.entities.mappers.ErrorResponseMapper;
import com.danielks.MarketList.exceptions.market_list.ListFinishedException;
import com.danielks.MarketList.exceptions.market_list.ListInvalidException;
import com.danielks.MarketList.exceptions.market_list.ListNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(assignableTypes = {MarketListController.class})
public class ListExceptionHandler {
    private final ErrorResponseMapper errorResponseMapper;

    public ListExceptionHandler(ErrorResponseMapper errorResponseMapper) {
        this.errorResponseMapper = errorResponseMapper;
    }

    @ExceptionHandler(ListNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleListNotFound(ListNotFoundException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.NOT_FOUND, ex);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(ListInvalidException.class)
    public ResponseEntity<ErrorResponse> handleListInvalid(ListInvalidException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.BAD_REQUEST, ex);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(ListFinishedException.class)
    public ResponseEntity<ErrorResponse> handleListFinished(ListFinishedException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.BAD_REQUEST, ex);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
