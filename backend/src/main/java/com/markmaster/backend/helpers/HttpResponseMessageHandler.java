package com.markmaster.backend.helpers;

import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
@Scope("singleton")
@Component
public class HttpResponseMessageHandler {

    // Method to update HTTP response without 'data', defaults to null
    public ResponseEntity<Map<String, Object>> updateHttpResponse(String message, HttpStatus status) {
        return updateHttpResponse(message, status, null);
    }

    // Unified method to handle both List<?> and Object data
    public ResponseEntity<Map<String, Object>> updateHttpResponse(String message, HttpStatus status, Object data) {
        Map<String, Object> response = new HashMap<>();
        response.put("status", status.value());
        response.put("message", message);
        response.put("data", data);  // Data can be a list, a single object, or null

        return new ResponseEntity<>(response, status);
    }
}
