package com.markmaster.backend.controllers;

import com.markmaster.backend.helpers.HttpResponseMessageHandler;
import com.markmaster.backend.models.Batch;
import com.markmaster.backend.service.Batch.BatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/batch")
public class BatchController {
    private final BatchService batchService;
    private final HttpResponseMessageHandler httpResponseUpdater;

    @Autowired
    public BatchController(BatchService batchService, HttpResponseMessageHandler httpResponseUpdater) {
        this.batchService = batchService;
        this.httpResponseUpdater = httpResponseUpdater;
    }

    @GetMapping("/all")
    ResponseEntity<Map<String, Object>> all() {
        return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, batchService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Map<String, Object>> getById(@PathVariable Long id) {
        Optional<Batch> batchOptional = Optional.ofNullable(batchService.findById(id));
        if (batchOptional.isPresent()) {
            return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, batchOptional);
        }
        return httpResponseUpdater.updateHttpResponse("Batch with the given id not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    Batch create(@RequestBody Batch batch) throws HttpMessageNotReadableException {
        batch.setId((long) (Math.random() * 1_000_000) + 1);
        batchService.save(batch);
        return batch;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody Batch batch) {
        Optional<Batch> batchOptional = Optional.ofNullable(batchService.findById(id));
        if (batchOptional.isPresent()) {
            batchService.updateById(batch, id);
            return httpResponseUpdater.updateHttpResponse("Batch with id:" + id + " has been updated successfully",
                    HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Batch with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Optional<Batch> batchOptional = Optional.ofNullable(batchService.findById(id));
        if (batchOptional.isPresent()) {
            batchService.deleteById(id);
            return httpResponseUpdater.updateHttpResponse("Batch with id:" + id + " has been deleted successfully",
                    HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Batch with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }
}
