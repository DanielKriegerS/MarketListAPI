package com.danielks.MarketList.exceptions.handlers;

import com.danielks.MarketList.controllers.MarketListController;
import com.danielks.MarketList.entities.ErrorResponse;
import com.danielks.MarketList.entities.mappers.ErrorResponseMapper;
import com.danielks.MarketList.exceptions.auth.InvalidUserLoginException;
import com.danielks.MarketList.exceptions.auth.InvalidUserPasswordException;
import com.danielks.MarketList.exceptions.auth.LoginUsernameNotFoundException;
import com.danielks.MarketList.exceptions.auth.UserAlreadyExistsException;
import com.danielks.MarketList.exceptions.market_list.ListFinishedException;
import com.danielks.MarketList.exceptions.market_list.ListInvalidException;
import com.danielks.MarketList.exceptions.market_list.ListNotFoundException;
import com.danielks.MarketList.security.controllers.AuthController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(assignableTypes = {MarketListController.class, AuthController.class})
public class GlobalExceptionHandler {
    private final ErrorResponseMapper errorResponseMapper;

    public GlobalExceptionHandler(ErrorResponseMapper errorResponseMapper) {
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

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleUserAlreadyExists(UserAlreadyExistsException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.CONFLICT, ex);
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    @ExceptionHandler(LoginUsernameNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleLoginUsernameNotFound(LoginUsernameNotFoundException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.NOT_FOUND, ex);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(InvalidUserLoginException.class)
    public ResponseEntity<ErrorResponse> handleInvalidUserLogin(InvalidUserLoginException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.UNAUTHORIZED, ex);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
    }

    @ExceptionHandler(InvalidUserPasswordException.class)
    public ResponseEntity<ErrorResponse> handleInvalidUserPassword(InvalidUserPasswordException ex) {
        ErrorResponse error = errorResponseMapper.toErrorResponse(HttpStatus.UNAUTHORIZED, ex);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
    }
}
